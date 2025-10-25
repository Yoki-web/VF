// На вашем backend - обмен кода на access token
app.get('/auth/callback', async (req, res) => {
  try {
    const { code, state } = req.query;
    
    // Валидация state параметра (защита от CSRF)
    if (!state || state !== req.session.oauthState) {
      return res.status(400).send('Invalid state parameter');
    }
    
    // Обмен authorization code на access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        code: code,
        grant_type: 'authorization_code',
        NEXTAUTH_URL: process.env.REDIRECT_URI
      })
    });
    
    if (!tokenResponse.ok) {
      throw new Error(`Token request failed: ${tokenResponse.status}`);
    }
    
    const tokens = await tokenResponse.json();
    const accessToken = tokens.access_token;
    
    // Получение данных пользователя
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { 'Authorization': `Bearer ${accessToken}` } // Исправлено: добавлены ``
    });
    
    if (!userResponse.ok) {
      throw new Error(`User info request failed: ${userResponse.status}`);
    }
    
    const userData = await userResponse.json();
    // userData содержит email, имя, фото и т.д.
    
    // Создание сессии пользователя в нашей системе
    req.session.user = {
      id: userData.id,
      email: userData.email,
      name: userData.name,
      picture: userData.picture,
      provider: 'google'
    };
    
    // Очистка oauth state после успешной авторизации
    delete req.session.oauthState;
    
    res.redirect('/dashboard');
    
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).send('Authentication failed');
  }
});