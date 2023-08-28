
# Contacts API

The Contacts API allows you to manage user contacts.

Base URL: `http://localhost:3000`

## Authentication

Some endpoints require basic HTTP authentication. 

Provide the `username` and `password` in the request header:

```
Authorization: Basic username:password
```

## Contacts

### Get All Contacts

Returns a list of all contacts.

**Endpoint**

```
GET /contacts
```

**Example Response**

```json
{
  "contacts": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "id": 2, 
      "name": "Jane Smith",
      "email": "janesmith@example.com"
    },
    // more contacts
  ]
}
```

**Status Codes**

| Status Code | Description |
|-------------|-------------|
| 200 OK | Contacts fetched successfully. |

### Get Authenticated Contacts

Returns a list of all contacts after authentication.

**Endpoint** 

```
GET /auth-contacts
```

**Status Codes**

| Status Code | Description |  
|-------------|-------------|
| 200 OK | Contacts fetched successfully. |
| 401 Unauthorized | Invalid credentials. |


### Get Contact by ID

Returns a single contact by ID.

**Endpoint**

```
GET /contacts/:id
```

**Path Parameters**

| Name | Description |
|-|-|  
| id | ID of the contact to retrieve |

**Example Response**

```json
{
  "contact": {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
``` 

**Status Codes**  

| Status Code | Description |
|-------------|-------------|
| 200 OK | Contact fetched successfully. |
| 404 Not Found | Contact not found for the given ID. |

### Create New Contact 

Creates a new contact.

**Endpoint**

```  
POST /contacts
```

**Request Body**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

**Response**

```
Status Code: 201 Created
```

```json
{
  "contact": {
    "id": 11,  
    "name": "John Doe",
    "email": "johndoe@example.com"
  }
}
```

### Update Contact

Updates an existing contact.

**Endpoint**

```
PUT /contacts/:id
``` 

**Path Parameters**  

| Name | Description |
|-|-|
| id | ID of the contact to update |

**Request Body**

```json
{
  "name": "Jane Doe", 
  "email": "janedoe@example.com"
}
```

**Response**

```
Status Code: 200 OK
```

```json
{
  "contact": {
    "id": 1,
    "name": "Jane Doe",
    "email": "janedoe@example.com" 
  }
}
```

**Status Codes**

| Status Code | Description |
|-------------|-------------|
| 200 OK | Contact updated successfully. | 
| 404 Not Found | Contact not found for the given ID. |

### Delete Contact

Deletes a contact.

**Endpoint**

```
DELETE /contacts/:id 
```

**Path Parameters**

| Name | Description |
|-|-|
| id | ID of the contact to delete |


**Response**

```
Status Code: 204 No Content
```

**Status Codes**

| Status Code | Description |  
|-------------|-------------|
| 204 No Content | Contact deleted successfully. |
| 404 Not Found | Contact not found for the given ID. |

## Messages

### Get All Messages 

Returns a list of all messages.

**Endpoint**

```
GET /messages 
```

**Example Response**

```json
{
  "messages": [
    {
      "id": 1,
      "sender": "John Doe", 
      "recipient": "Jane Smith",
      "content": "Hello Jane!"
    },
    {
      "id": 2,
      "sender": "Jane Smith",
      "recipient": "John Doe",
      "content": "Hi John!" 
    },
    // more messages
  ]
}
```

### Get Message by ID

Returns a single message by ID.

**Endpoint**

```
GET /messages/:id
```

**Path Parameters** 

| Name | Description |
|-|-|
| id | ID of the message to retrieve |


**Example Response**

```json
{
  "message": {
    "id": 1,
    "sender": "John Doe",
    "recipient": "Jane Smith", 
    "content": "Hello Jane!"
  }
}
```

**Status Codes**

| Status Code | Description |
|-------------|-------------| 
| 200 OK | Message fetched successfully. |
| 404 Not Found | Message not found for the given ID. |


### Get Messages by Sender 

Returns all messages sent by a specific user.

**Endpoint**

```
GET /messages/sender/:name
```

**Path Parameters**

| Name | Description |
|-|-|
| name | Name of the sender |

**Example Response** 

```json
{
  "messages": [
    {
      "id": 1,
      "sender": "John Doe",
      "recipient": "Jane Smith",
      "content": "Hello Jane!" 
    },
    {
      "id": 3,
      "sender": "John Doe",
      "recipient": "Bob Wilson",
      "content": "Hey Bob!"
    }
  ]
}
```

**Status Codes**

| Status Code | Description |
|-------------|-------------|
| 200 OK | Messages fetched successfully. |  
| 404 Not Found | No messages found for the given sender. |

### Get Messages by Recipient

Returns all messages received by a specific user.

**Endpoint**

```
GET /messages/recipient/:name  
```

**Path Parameters** 

| Name | Description |
|-|-|
| name | Name of the recipient |


**Example Response**

```json
{
  "messages": [
    {
      "id": 1,
      "sender": "John Doe",
      "recipient": "Jane Smith",
      "content": "Hello Jane!"
    },
    { 
      "id": 4,
      "sender": "Bob Wilson",
      "recipient": "Jane Smith",
      "content": "Hi Jane!"
    }
  ]
}
```

**Status Codes**  

| Status Code | Description |
|-------------|-------------|
| 200 OK | Messages fetched successfully. |
| 404 Not Found | No messages found for the given recipient. |

### Create Message

Creates a new message.

**Endpoint**

```
POST /messages
```

**Request Body** 

```json
{
  "sender": "John Doe",
  "recipient": "Jane Smith",
  "content": "Hello Jane!" 
}
```

**Response**

```
Status Code: 201 Created
```

```json
{
  "message": {
    "id": 11,
    "sender": "John Doe",
    "recipient": "Jane Smith", 
    "content": "Hello Jane!"
  }
}
```

### Delete Message

Deletes a message.

**Endpoint**

```
DELETE /messages/:id
```

**Path Parameters**  

| Name | Description |
|-|-|
| id | ID of the message to delete |

**Response** 

```
Status Code: 204 No Content 
```

**Status Codes**  

| Status Code | Description |
|-------------|-------------|
| 204 No Content | Message deleted successfully. |
| 404 Not Found | Message not found for the given ID. |


## Favorites

### Get All Favorites

Returns all favorite contacts.

**Endpoint**

```
GET /favorites
```

**Example Response**

```json
[
  {
    "id": 1,
    "name": "John Doe", 
    "contactId": 1
  },
  {
    "id": 2,
    "name": "Bob Wilson",
    "contactId": 5
  } 
]
```

### Get Favorite by ID

Returns a single favorite contact by ID.

**Endpoint**

```
GET /favorites/:id
```

**Path Parameters**

| Name | Description |  
|-|-|
| id | ID of the favorite to retrieve |

**Example Response**

```json
{
  "favorite": {
    "id": 1,
    "name": "John Doe",
    "contactId": 1
  }
}
```

**Status Codes**

| Status Code | Description |
|-------------|-------------|
| 200 OK | Favorite contact fetched successfully. |
| 404 Not Found | Favorite contact not found for the given ID. |

### Get Favorite by Contact ID

Returns the favorite contact for a given contact ID.

**Endpoint**

```
GET /favorites/contact/:contactId
```

**Path Parameters** 

| Name | Description |
|-|-|
| contactId | ID of the contact |

**Example Response**

```json
{
  "favorite": {
    "id": 1,
    "name": "John Doe",
    "contactId": 1
  }
}
```

**Status Codes**

| Status Code | Description | 
|-------------|-------------|
| 200 OK | Favorite contact fetched successfully. |
| 404 Not Found | No favorite found for the given contact ID. |

### Create Favorite 

Adds a contact to favorites.

**Endpoint**

```
POST /favorites
```

**Request Body**

```json
{
  "name": "John Doe",
  "contactId": 1
}
```

**Response** 

```
Status Code: 201 Created
```

```json
{
  "favorite": {
    "id": 3,
    "name": "John Doe",
    "contactId": 1
  }
}
```

### Update Favorite Name

Updates the name for a favorite contact.

**Endpoint** 

```
PATCH /favorites/:id
```

**Path Parameters**

| Name | Description |  
|-|-|
| id | ID of the favorite to update |

**Request Body**

```json
{
  "name": "John M. Doe" 
}
```

**Response**

```
Status Code: 200 OK
``` 

```json
{
  "favorite": {
    "id": 1,
    "name": "John M. Doe", 
    "contactId": 1
  }
}
```

**Status Codes**

| Status Code | Description |
|-------------|-------------|
| 200 OK | Favorite updated successfully. |
| 404 Not Found | Favorite not found for the given ID. |


### Delete Favorite

Removes a favorite contact.

**Endpoint**

```
DELETE /favorites/:id
```

**Path Parameters**  

| Name | Description |
|-|-|  
| id | ID of the favorite to delete |

**Response**

```
Status Code: 204 No Content
```

**Status Codes** 

| Status Code | Description |
|-------------|-------------|
| 204 No Content | Favorite deleted successfully. | 
| 404 Not Found | Favorite not found for the given ID. |

