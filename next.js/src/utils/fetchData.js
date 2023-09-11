const fetchData = async ({ query, variables }) => {
  query = `query { ${query} }`
  try {
    const response = await fetch(process.env.GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const { status } = response;
    const body = await response.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return { status, data: body.data };
  } catch (error) {
    throw {
      status: error.status || 500,
      message: error.message,
      query,
    };
  }
};

export default fetchData;
