import { useState } from "react";
import useForm from "./hooks/useForm";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, handleChange, clear] = useForm({
    name: "",
    lastName: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsers([...users, form]);
    clear();
  };

  return (
    <div className="superContainer">
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
              />
              <Input
                label="Last name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <Button>send</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {users.map((x) => (
              <li key={x.email}>{`${x.name}  ${x.lastName}  ${x.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
