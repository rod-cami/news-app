const getData = async (URL) => {
  try {
    const response = await fetch(URL)
    return response;
  } catch (error) {
    return error
  }
};

export {getData}