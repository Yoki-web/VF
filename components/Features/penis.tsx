// Frontend - перенаправление на Google
function loginWithGoogle() {
  const clientId = '94056025991-3la22i2h4kmmj0tusddfki0aqriimmf1.apps.googleusercontent.com';
  const redirectUri = 'http://localhost:3001/api/auth/callback/google';
  const scope = 'email profile';
  const state = '483278f587b82f55d7830eff0dda145fd813f7e85ccd8a3b93c6b1bec4407d7a';
  
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?
    GOOGLE_CLIENT_ID=${clientId}&
    NEXTAUTH_URL=${encodeURIComponent(redirectUri)}&
    code=code&
    scope=${encodeURIComponent(scope)}&
    state=${state}`;
  
  window.location.href = authUrl;
}