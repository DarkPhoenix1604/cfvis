async function fetchData(userName) {
  try {
    const response = await fetch("https://codeforces.com/api/user.info?handles="+userName);
    const classOne = await response.json();
    const response2 = await fetch("https://codeforces.com/api/user.rating?handle="+userName);
    const classTwo = await response2.json();
    console.log(classOne);
    return {classOne, classTwo};
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export default fetchData;
