// updateAccountInfo.js
export default async function updateAccountInfo(userId, userType, accountEmail, accountPhone) {
    const { EXPO_PUBLIC_NGROK_URL } = process.env;
    const response = await fetch(`${EXPO_PUBLIC_NGROK_URL}/api/account/${userId}?type=${userType}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        account_email: accountEmail,
        account_phone: accountPhone,
        account_type: userType,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return response.json();
  }