import useForm from "./hooks/useForm";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

function App() {
  const [form, handleChange] = useForm({ name: "", lastName: "", email: "" });

  console.log(form);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
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
            <Input
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </form>
          <Button>send</Button>
        </div>
      </Card>
    </Container>
  );
}

export default App;
