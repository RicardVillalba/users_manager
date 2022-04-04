import useForm from "../hooks/useForm";
import Button from "./Button";
import Input from "./Input";

const UserForm = ({ submit }) => {
  const [form, handleChange, clear] = useForm({
    name: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    clear();
  };

  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default UserForm;
