import { backendPath } from "./constants";

const handleResponse = async (data) => {
  const res = await data.json()
  if (data.ok) {
    return res
  } else {
    return Promise.reject(res)
  }
}

export async function register(password, email) {
  const data = await fetch(`${backendPath}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password,
      email
    })
  })
  return handleResponse(data)
}

export async function login(password, email) {
  const data = await fetch(`${backendPath}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password,
      email
    })
  })
  return handleResponse(data)
}

export async function checkToken(token) {
  const data = await fetch(`${backendPath}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  return handleResponse(data)
}