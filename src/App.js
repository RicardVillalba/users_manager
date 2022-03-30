import useForm from "./hooks/useForm";
import Input from "./components/Input";

function App() {
  const [form, handleChange] = useForm({ name: "" });

  console.log(form);
  return (
    <form>
      <Input
        label="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
