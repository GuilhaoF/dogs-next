// @ts-nocheck
export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST() {
  return {
    url: API_URL + '/jwt-auth/v1/token',
  };
}

export function TOKEN_VALIDATE_POST() {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
  };
}

export function USER_GET() {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
    }
  };
}

export function USER_POST() {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  }
}

export function PHOTO_POST() {
  return {
    url: API_URL + '/api/photo',
  };
}

export function PHOTOS_GET({ page, total, user }) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function PHOTO_GET(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function COMMENT_POST(id) {
  return {
    url: `${API_URL}/api/comment/${id}`,
  };
}

export function PHOTO_DELETE(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
  };
}

export function PASSWORD_LOST() {
  return {
    url: API_URL + '/api/password/lost',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body) {
  return {
    url: API_URL + '/api/password/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET() {
  return {
    url: API_URL + '/api/stats',
  };
}
