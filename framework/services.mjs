import axios from 'axios'
import { config } from '../framework/config.mjs'

export const generateToken = async (usm, pswd) => {
  const url = `${config.baseUrl}/Account/v1/GenerateToken`
  const body = {
    userName: usm,
    password: pswd,
  }
  const response = await axios.post(url, body)
  return response.data.token
}

export const createBook = async (ID, ISBN, token) => {
  const url = `${config.baseUrl}/BookStore/v1/Books`
  const body = {
    userId: ID,
    collectionOfIsbns: [
      {
        isbn: ISBN,
      },
    ],
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const response = await axios.post(url, body, { headers })
  return {
    status: response.status,
    data: await response.data,
  }
}

export const changeBook = async (isbn1, ID, isbn2, token) => {
  const url = `${config.baseUrl}/BookStore/v1/Books/${isbn1}`
  const body = {
    userId: ID,
    isbn: isbn2,
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const response = await axios.put(url, body, { headers })
  return {
    status: response.status,
    data: await response.data,
  }
}

export const getBook = async isbn => {
  const url = `${config.baseUrl}/BookStore/v1/Book?ISBN=${isbn}`
  const response = await axios.get(url)
  return {
    status: response.status,
    data: await response.data,
  }
}

export const deleteBook = async (ISBN, ID, token) => {
  const url = `${config.baseUrl}/BookStore/v1/Book`
  const body = {
    isbn: ISBN,
    userId: ID,
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  const response = await axios.put(url, body, { headers })
  return {
    status: response.status,
    data: await response.data,
  }
}

// deleteBook(TOKEN)
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// getBook(config.isbn[0])
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// generateToken('Toma', 'i$d#h4c]8ZTa?wf')
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// createBook(TOKEN)
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

// changeBook(TOKEN)
//   .then((result) => {
//     console.log('status:', result.status);
//     console.log('data:', result.data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
