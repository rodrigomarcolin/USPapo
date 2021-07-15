import axios from "axios";

export default axios.create({
  baseURL: "http://rodrigosm29.pythonanywhere.com/eventos/",
});

const [results, setResults] = useState([]);

const searchApi = async () => {
  const response = await requisicao.get();
  setResults(response.data);
};

useEffect(() => {
  searchApi();
}, []);
console.log(results);

<FlatList
  horizontal
  data={results}
  keyExtractor={(result) => result.id}
  renderItem={({ item }) => {
    return <Text>{item.id}</Text>;
  }}
/>;
