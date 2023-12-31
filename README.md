API Specification - Simple Phone App

**Base URL:** `http://phone-api.testamplify.io/`

**Contacts**

- Get All Contacts

  - Endpoint: `GET /contacts`
  - Description: Retrieve a list of all contacts.
  - Response:
    - Status Code: 200 (OK)
    - Body: Array of contact objects containing `id`, `name`, and `email` fields.

- Get Contact by ID

  - Endpoint: `GET /contacts/:id`
  - Description: Retrieve a specific contact by its ID.
  - Parameters:
    - `id`: Contact ID (numeric)
  - Response:
    - Status Code: 200 (OK)
    - Body: Contact object containing `id`, `name`, and `email` fields.

- Create a New Contact

  - Endpoint: `POST /contacts`
  - Description: Create a new contact.
  - Request Body: JSON object with `name` and `email` fields.
  - Response:
    - Status Code: 201 (Created)
    - Body: Newly created contact object with `id`, `name`, and `email` fields.

**Messages**

- Get All Messages

  - Endpoint: `GET /messages`
  - Description: Retrieve a list of all messages.
  - Response:
    - Status Code: 200 (OK)
    - Body: Array of message objects containing `id`, `sender`, `recipient`, and `content` fields.

- Get Message by ID

  - Endpoint: `GET /messages/:id`
  - Description: Retrieve a specific message by its ID.
  - Parameters:
    - `id`: Message ID (numeric)
  - Response:
    - Status Code: 200 (OK)
    - Body: Message object containing `id`, `sender`, `recipient`, and `content` fields.

- Update Message

  - Endpoint: `PUT /messages/:id`
  - Description: Update an existing message.
  - Parameters:
    - `id`: Message ID (numeric)
  - Request Body: JSON object with `content` field to update the message content.
  - Response:
    - Status Code: 200 (OK)
    - Body: Updated message object containing `id`, `sender`, `recipient`, and updated `content` field.

- Delete Message

  - Endpoint: `DELETE /messages/:id`
  - Description: Delete a message by its ID.
  - Parameters:
    - `id`: Message ID (numeric)
  - Response:
    - Status Code: 204 (No Content)

**Favorites**

- Get All Favorites

  - Endpoint: `GET /favorites`
  - Description: Retrieve a list of all favorite contacts.
  - Response:
    - Status Code: 200 (OK)
    - Body: Array of favorite objects containing `id`, `name`, and `contactId` fields.

- Get Favorite by ID

  - Endpoint: `GET /favorites/:id`
  - Description: Retrieve a specific favorite contact by its ID.
  - Parameters:
    - `id`: Favorite ID (numeric)
  - Response:
    - Status Code: 200 (OK)
    - Body: Favorite object containing `id`, `name`, and `contactId` fields.

- Create a New Favorite

  - Endpoint: `POST /favorites`
  - Description: Add a contact to the favorites list.
  - Request Body: JSON object with `name` and `contactId` fields.
  - Response:
    - Status Code: 201 (Created)
    - Body: Newly created favorite object with `id`, `name`, and `contactId` fields.

- Update Favorite

 Name

  - Endpoint: `PATCH /favorites/:id`
  - Description: Update the name of a favorite contact.
  - Parameters:
    - `id`: Favorite ID (numeric)
  - Request Body: JSON object with `name` field to update the favorite name.
  - Response:
    - Status Code: 200 (OK)
    - Body: Updated favorite object containing `id`, updated `name`, and `contactId` fields.

- Delete Favorite

  - Endpoint: `DELETE /favorites/:id`
  - Description: Remove a favorite contact from the favorites list.
  - Parameters:
    - `id`: Favorite ID (numeric)
  - Response:
    - Status Code: 204 (No Content)

This API specification document outlines the available routes, their endpoints, request/response details, and parameters for each route. 