import request from 'supertest';
import { NextApiHandler } from 'next';
import os from 'os';
import handler from './hostname'; // Adjust the import path based on your project structure

describe('/api/hostname', () => {
  it('should return the correct hostname', async () => {
    const mockHostname = 'test-hostname'; // Set a mock hostname for testing

    // Mock the os.hostname() function to always return the mockHostname
    jest.spyOn(os, 'hostname').mockReturnValue(mockHostname);

    // Use supertest to send a GET request to the API route
    const response = await request(handler).get('/');

    // Expect a 200 status code
    expect(response.status).toBe(200);

    // Expect the response body to contain the correct hostname
    expect(response.body).toEqual({ hostname: mockHostname });

    // Restore the original os.hostname() function
    jest.restoreAllMocks();
  });
});

