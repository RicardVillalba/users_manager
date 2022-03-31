import useForm from "./hooks/useForm";
import Input from "./components/Input";

function App() {
  const [form, handleChange] = useForm({ name: "", lastName: "" });

  console.log(form);
  return (
    <form>
      <Input
        label="name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        label="Last name"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
      />
    </form>
  );
}

export default App;
