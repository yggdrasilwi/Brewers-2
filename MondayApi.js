// Gives us access to the variables defined in the .env file!
// Refer to the .env-example file to see how it should be formatted
// NOTE: Make sure to have .env listed in the .gitignore!! This information should always be hidden and never committed to the origin repo
import "dotenv/config";
 
// REVIEW: Work with monday.com in the API Playground to figure out what query you want to work with.
// TODO: Add the proper board id [Hint: Use the API Playground to figure out what ids you can use]
const MONDAY_QUERY = `
{
  items_page_by_column_values(
    board_id: 18405291687
    columns: [{column_id: "color_mm1rn6c2", column_values: ["completed"]}]
  ) {
    items {
      id
      name
      column_values(ids:[ "numeric_mm1yn8z3","numeric_mm1ymyr0"]) {
        id value
      }
    }
  }
}
`;
 
// Make API Request
export const fetchFromMondayAPI = async () => {
  // Check if the token exists. If not, error.
  if (!process.env.MONDAY_TOKEN) {
    throw new Error("Missing MONDAY_TOKEN! Add it to your .env file.");
  }
 
  // Capturing the API's response in a variable by making a request!
  // The endpoint is the URL. This is the source we are pointing to to fetch data from
  const response = await fetch("https://api.monday.com/v2", {
    // monday.com uses POST due to the fact that it uses GraphQL. GraphQL typically only uses one type of endpoint (above) where you send a query to further defined what you want to do (GET, POST, PUT, PATCH, DELETE).
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // We have to send the API Token (from monday.com) to let the endpoint know we have permission to access the data!
      Authorization: process.env.MONDAY_TOKEN,
    },
    // We are taking the MONDAY_QUERY (above), turning it into a JSON string, and sending that to the API call. This is what we ACTUALLY want from the endpoint.
    body: JSON.stringify({ query: MONDAY_QUERY }),
  });
 
  // Turn the response into a JavaScript object
  const data = await response.json();
 
  // TODO: Use the status of the response to display different messages based on the error. Where would I do this?
  const status = response.status;
 
  // Return the constant "data" so that whenever we run this function (fetchFromMondayAPI), we get the results of the API call we just made at line 35
  // Return the constant "status" to display different messages based on the error.
  return { data, status };
};
 
// Now, we run the function!
fetchFromMondayAPI()
  // If it's a success, display a message and print the data as a string into the terminal
  .then((result) => {
    console.log(
      "Yay! I fetched the data from monday.com! The response was: ",
      result.status,
    );
    const items = result.data.data.items_page_by_column_values.items
    const target = items.length
    console.log(target)
    const people = items.map(person => {
      return{
        id:person.id,
        individuals: person.name,
        live: person.column_values[1]
      }
    })
    console.log(people)
    const Funds = items.map(person => {
      return{
        id:person.id,
        individuals: person.name,
        live: person.column_values[0]
      }
    })
    console.log(Funds)
    const person = [];
let totalPeople = 0;
for (let i = 0; i < people.length; i++) {
  totalPeople += people[i];
}
console.log("Total People Helped:", totalPeople);
  })
  .catch((err) => {
    console.error("Aw shucks! Failed to fetch data from monday.com :( ");
    console.error("Reason: ", err.message);
 
    // Exit the process
    process.exit(1);
  });