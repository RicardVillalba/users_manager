import { useState } from "react";
import useForm from "./hooks/useForm";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";

function App() {
  const [users, setUsers] = useState([]);
  const [form, handleChange] = useForm({ name: "", lastName: "", email: "" });

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
  };

  console.log(form, users);
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }}>
          <form onSubmit={submit}>
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
            <Button>send</Button>
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
