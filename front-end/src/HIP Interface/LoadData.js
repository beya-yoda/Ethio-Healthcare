

export async function FetchData(url, values = null) {
    const HealthCare = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"))
    console.log('Session storage data (FetchData):', HealthCare);
    
    if (!HealthCare || !HealthCare.token) {
        console.error('No authentication token found. Please log in again.');
        return { 
            data: { error: 'No authentication token found' }, 
            res: { status: 401 } 
        };
    }
    
    try {
        // Remove any leading slash and replace multiple slashes with single slash
        let cleanUrl = url.replace(/^\/+/, '').replace(/\/+/g, '/'); // Remove multiple slashes
        cleanUrl = cleanUrl.replace(/^api\/v1\//, ''); // Remove leading api/v1/
        console.log(`Making request to: ${process.env.REACT_APP_API_URL}/api/v1/${cleanUrl}`);
        console.log('With token:', HealthCare.token);
        
        let method = "GET";
        let body = null;
        
        // For client/profile/get, use POST method with body
        if (cleanUrl.includes("client/profile/get")) {
            method = "POST";
            body = JSON.stringify({ healthID: values });
        }
        
        let res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/${cleanUrl}`, {
            method: method,
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${HealthCare.token}`
            },
            body: body
        })
        let data = await res.json()
        console.log('API response (FetchData):', data);
        return { data, res }
    } catch (err) {
        console.error('API request error (FetchData):', err);
        return { 
            data: { error: err.message || 'API request failed' }, 
            res: { status: 500 } 
        };
    }
}

export async function PostData(url, values) {
    const HealthCare = JSON.parse(sessionStorage.getItem("BharatSevahealthCare"))
    console.log('Session storage data:', HealthCare);
    
    if (!HealthCare || !HealthCare.token) {
        console.error('No authentication token found. Please log in again.');
        return { 
            data: { error: 'No authentication token found' }, 
            res: { status: 401 } 
        };
    }
    
    try {
        console.log(`Making API request to: ${process.env.REACT_APP_API_URL}${url}`);
        console.log('With token:', HealthCare.token);
        
        let res = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${HealthCare.token}`
            },
            body: JSON.stringify(values)
        })
        let data = await res.json()
        console.log('API response:', data);
        return { data, res }
    } catch (err) {
        console.error('API request error:', err);
        return err
    }
}