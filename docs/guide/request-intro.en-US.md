---
group: Requests
order: 1
title: Overview
---


## Multiple Request Environments

In development projects, it’s common to work with multiple request environment addresses, such as backend addresses for development, testing, pre-production, and production environments.

You can configure multiple request addresses in environment files and then determine which address to use in the request functions based on environment variables.

Currently, the project includes the following environment files:

`.env.prod`, `.env.test`

## Request Configuration Overview

Configuration items in the `.env` file:

- `VITE_SERVICE_SUCCESS_CODE`: The code returned by the backend indicating a successful request.
- `VITE_SERVICE_LOGOUT_CODES`: The codes indicating a failed request that requires the user to log out. Multiple codes are separated by commas.
- `VITE_SERVICE_MODAL_LOGOUT_CODES`: The codes indicating a failed request that requires the user to log out (with a modal notification). Multiple codes are separated by commas.
- `VITE_SERVICE_EXPIRED_TOKEN_CODES`: The codes indicating a failed request that requires a token refresh. Multiple codes are separated by commas.

Configuration items in the `.env.test` or `.env.prod` files:

- `VITE_SERVICE_BASE_URL`: The base URL for requests.
- `VITE_OTHER_SERVICE_BASE_URL`: The base URL for other requests.

### Introduction to Request Functions

1. **Request Functions: `createRequest` and `createFlatRequest`**

- `createRequest`: The returned request instance directly provides Axios response data (with optional transformation).
- `createFlatRequest`: The returned request instance wraps the response data and error information into a flat object, returning the result in a unified format.

2. **Parameters for `createRequest`/`createFlatRequest`**

- `axiosConfig`: The Axios configuration, including the baseUrl and other settings such as request timeout, headers, etc.
- `options`: Configurations for input validation and other logic (see `RequestOption` below).

```ts
interface RequestOption<ResponseData = any> {
  /**
   * Executes before the request is sent, used to modify the request configuration, such as adding a token to the headers.
   */
  onRequest: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  /**
   * Determines whether the backend response is successful by comparing the returned code.
   */
  isBackendSuccess: (response: AxiosResponse<ResponseData>) => boolean;
  /**
   * An asynchronous function called when the backend request is considered a business failure, such as handling token expiration.
   */
  onBackendFail: (
    response: AxiosResponse<ResponseData>,
    instance: AxiosInstance
  ) => Promise<AxiosResponse> | Promise<void>;
  /**
   * Transforms the backend response data when the responseType is JSON.
   */
  transformBackendResponse(response: AxiosResponse<ResponseData>): any | Promise<any>;
  /**
   * A function called when a request fails (including both request failures and business failures). For example, handling error messages.
   */
  onError: (error: AxiosError<ResponseData>) => void | Promise<void>;
}
```
