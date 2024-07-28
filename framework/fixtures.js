import { faker } from '@faker-js/faker'

export function GenerateUsers() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    password: 'i$d#h4c]8ZTa?wf',
  }
}
