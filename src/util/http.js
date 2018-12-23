const request = (url, requestOptions, doWhenOK, doWhenError) => {
  fetch(url,requestOptions)
    .then(res => res.json())
    .then(result => doWhenOK(), error => doWhenError());
};

const authHeaders = (token = null) =>
  token ? { Authorization: `Bearer ${token}` } : {};

export const get = (url, doWhenOK, doWhenError, token = null) =>
  request(
    url,
    {
      method: "GET",
      headers: authHeaders(token)
    },
    doWhenOK,
    doWhenError
  );

export const post = (url, doWhenOK, doWhenError, data, token = null) =>
  request(
    url,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: Object.assign(
        {
          "Content-Type": "application/json"
        },
        authHeaders(token)
      )
    },
    doWhenOK,
    doWhenError
  );

export const put = (url, data, doWhenOK, doWhenError, token = null) =>
  request(
    url,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: Object.assign(
        {
          "Content-Type": "application/ld+json"
        },
        authHeaders(token)
      )
    },
    doWhenOK,
    doWhenError
  );

export const deleteRequest = (url, doWhenOK, doWhenError, token = null) =>
  request(
    url,
    {
      method: "DELETE",
      headers: authHeaders(token)
    },
    doWhenOK,
    doWhenError
  );
