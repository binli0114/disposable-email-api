const jwt = require("jsonwebtoken");
const jwtDecode = require("jwt-decode");

try {
	const token =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCIsImtpZCI6ImtnMkxZczJUMENUaklmajRydDZKSXluZW4zOCJ9.eyJhdWQiOiJhcGk6Ly9mMzY4MzRhMy1mY2JiLTRjM2MtOTZkNS1lOTUwMjAzN2I4MWQiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTY2ODJkMy1hM2U3LTQ1YmUtYjhhNC0xMzNhYzJjNmU3NDcvIiwiaWF0IjoxNjAxNDI1MDY0LCJuYmYiOjE2MDE0MjUwNjQsImV4cCI6MTYwMTUxMTc2NCwiYWlvIjoiRTJSZ1lBZ3BkMTN5WS9HbUoxOW5oNXB0Mzd6dE1RQT0iLCJhcHBpZCI6IjQ2MWU4NjgzLTU1NzUtNDU2MS1hYzdmLTg5OWNjOTA3ZDYyYSIsImFwcGlkYWNyIjoiMiIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzRlNjY4MmQzLWEzZTctNDViZS1iOGE0LTEzM2FjMmM2ZTc0Ny8iLCJvaWQiOiI5NjM1Yzk4Yi1kYWY1LTQ3ZTMtYjg3MC01NTRlZWM2Yjk4MjEiLCJyaCI6IjAuQUFBQTA0Sm1UdWVqdmtXNHBCTTZ3c2JuUjRPR0hrWjFWV0ZGckgtSm5Na0gxaXBCQUFBLiIsInN1YiI6Ijk2MzVjOThiLWRhZjUtNDdlMy1iODcwLTU1NGVlYzZiOTgyMSIsInRpZCI6IjRlNjY4MmQzLWEzZTctNDViZS1iOGE0LTEzM2FjMmM2ZTc0NyIsInV0aSI6IlJlZHl0UHBhR1U2YTJ2Y0Q5QzBCQVEiLCJ2ZXIiOiIxLjAifQ.C5OpATXA4fVdNNXd7KWXxoG3Iw8As27rUOANJQmczfkpDkRt1JBr4Use77wvGT9xtFnhpIBSvXnotGn0ZUOOSU7su1JRP7XeRna6xazhTHfxY7gk8rw1LggvZIImARMVafwrS0Q3qg9UATMuPgOKMLqyzjnVZmRUAYy78_ZxzRwUxNGmOFnGA8MWu0AdYrkmYTL4Nj4mfZYi9Y2MFGzxd64DphW4tm5ZAh5c04C1cECZiq3ZXwwzOkTQk2y6ZKRXPa7pHrDUBeiM9CfZGfmyBFR9cPTKqXVqv4FsDbwygUp1E91NWqhY9Vf785np-Qlx_GalH1Y2RMtFQtpvt3t9aA";
	const decoded = jwtDecode(token, { header: true });

	console.log(`decoded: ${JSON.stringify(decoded, undefined, 2)}`);
	const key =
		"-----BEGIN CERTIFICATE-----\nMIIDBTCCAe2gAwIBAgIQQiR8gZNKuYpH6cP+KIE5ijANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJhY2NvdW50cy5hY2Nlc3Njb250cm9sLndpbmRvd3MubmV0MB4XDTIwMDgyODAwMDAwMFoXDTI1MDgyODAwMDAwMFowLTErMCkGA1UEAxMiYWNjb3VudHMuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAMkymupuRhTpZc+6CBxQpL0SaAb+8CzLiiDyx2xRoecjojvKN2pKKjIX9cejMSDRoWaOnZCK4VZVX1iYRCWT1WkHb8r1ZpSGa7oXG89zxjKjwG46tiamwdZjJ7Mhh8fqLz9ApucY/LICPMJuu6d56LKs6hb4OpjylTvsNUAa+bHg1NgMFNg0fPCxdr9N2Y4J+Jhrz3VDl4oU0KDZX/pyRXblzA8kYGWm50dh5WB4WoB8MtW3lltVrRGj8/IgTf9GxpBsO9OWgwVByZHU7ctZs7AmUbq/59Ipql7vSM6EsoquXdMiq0QOcZAPitwzHkTKrmeULz0/RHnuBGXxS/e8wX0CAwEAAaMhMB8wHQYDVR0OBBYEFGcWXwaqmO25Blh2kHHAFrM/AS2CMA0GCSqGSIb3DQEBCwUAA4IBAQDFnKQ98CBnvVd4OhZP0KpaKbyDv93PGukE1ifWilFlWhvDde2mMv/ysBCWAR8AGSb1pAW/ZaJlMvqSN/+dXihcHzLEfKbCPw4/Mf2ikq4gqigt5t6hcTOSxL8wpe8OKkbNCMcU0cGpX5NJoqhJBt9SjoD3VPq7qRmDHX4h4nniKUMI7awI94iGtX/vlHnAMU4+8y6sfRQDGiCIWPSyypIWfEA6/O+SsEQ7vZ/b4mXlghUmxL+o2emsCI1e9PORvm5yc9Y/htN3Ju0x6ElHnih7MJT6/YUMISuyob9/mbw8Vf49M7H2t3AE5QIYcjqTwWJcwMlq5i9XfW2QLGH7K5i8\n-----END CERTIFICATE-----";
	//
	// // decode & verify token
	const verified = jwt.verify(token, key);
	console.log(`verified: ${JSON.stringify(verified)}`);
	//""
} catch (err) {
	console.error(err);
}