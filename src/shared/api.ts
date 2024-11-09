const apiUrl: string = 'https://api.umiter.ru/v1/market/' 

export async function fetchApi<T>(
    path: string,
    init?: RequestInit,
  ): Promise<T> {
    const response = await fetch(`${apiUrl}${path}`, init)
        return await response.json()
  }

  export async function fetchApiResponse(
    path: string,
    init?: RequestInit,
  ) {
    const response = await fetch(`${apiUrl}${path}`, init)
    return response
  }

export async function getProductById() {
    return await fetchApiResponse(`public/products/1`, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }

export async function sendOrderWithDetails(data: any) {
    return await fetchApiResponse(`public/orders`, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }