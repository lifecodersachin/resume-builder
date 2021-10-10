import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import "./form.css";
import { DatePicker } from "@mui/lab";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { nanoid } from "nanoid";

const skillsList = [
  "HTML",
  "CSS",
  "Sass",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "Typescript",
  "React",
  "Redux",
  "Node",
  "Express",
  "Python",
  "Django",
  "Flask",
];

const useStyles = makeStyles({
  form: {
    // border: "1px solid",
    padding: "2rem 0",
    margin: "auto",
    width: "80%",
  },
  field: {
    width: "100%",
  },
  btn: {
    width: "100%",
  },
});

const Form = () => {
  const classes = useStyles();
  const history = useHistory();
  const { register, watch, control, handleSubmit } = useForm();
  const [skills, setSkills] = React.useState(skillsList[0]);

  const [inputFields, setInputFields] = useState([
    { id: nanoid(), Institute: "", degree: "" },
  ]);

  // const handleAddFields = () => {
  //   setInputFields([
  //     ...inputFields,
  //     { id: nanoid(), Institute: "", degree: "" },
  //   ]);
  // };

  // const handleRemoveFields = (id) => {
  //   const values = [...inputFields];
  //   values.splice(
  //     values.findIndex((value) => value.id === id),
  //     1
  //   );
  //   setInputFields(values);
  // };

  const formSubmit = (data) => {
    console.log("Data is", data);
    let payload = data;
    payload["skills"] = skills;
    console.log("Payload is", payload);
    localStorage.setItem("resume", JSON.stringify(payload));

    setTimeout(() => {
      console.log("Submitted.....");
      history.push("/resume");
    }, 1000);
  };

  // console.log("Watch", watch());

  useEffect(() => {
    console.log("Skills: ", skills);
  }, [skills]);

  return (
    <div className="form-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            Resume Builder : Enter Details
          </Typography>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(formSubmit)}
            className={classes.form}
          >
            <Grid container rowSpacing={2} columnSpacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  {...register("firstName", { required: true })}
                  label="First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  {...register("lastName", { required: true })}
                  label="Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.field}
                  {...register("email", { required: true })}
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.field}
                  {...register("address", { required: true })}
                  label="Address"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.field}
                  {...register("phone", { required: true })}
                  label="Phone"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <br />
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Education
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  {...register("institute", { required: true })}
                  label="Institute"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  {...register("degree", { required: true })}
                  label="Degree"
                  variant="outlined"
                />
              </Grid>
              <br />
              <Grid item xs={12} md={6}>
                <Controller
                  name="eduDateStart"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className={classes.field}
                      views={["year", "month"]}
                      label="Start Date"
                      minDate={new Date("2012-03-01")}
                      maxDate={new Date("2023-06-01")}
                      value={value}
                      onChange={onChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.field}
                          helperText={null}
                        />
                      )}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="eduDateEnd"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className={classes.field}
                      views={["year", "month"]}
                      label="Start Date"
                      minDate={new Date("2012-03-01")}
                      maxDate={new Date("2023-06-01")}
                      value={value}
                      onChange={onChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.field}
                          helperText={null}
                        />
                      )}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Experience
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  {...register("company", { required: true })}
                  label="Company"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  className={classes.field}
                  {...register("designation", { required: true })}
                  label="Designation"
                  variant="outlined"
                />
              </Grid>
              <br />
              <Grid item xs={12} md={6}>
                <Controller
                  name="expDateStart"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className={classes.field}
                      views={["year", "month"]}
                      label="Start Date"
                      minDate={new Date("2012-03-01")}
                      maxDate={new Date("2023-06-01")}
                      value={value}
                      onChange={onChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.field}
                          helperText={null}
                        />
                      )}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="expDateEnd"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <DatePicker
                      className={classes.field}
                      views={["year", "month"]}
                      label="Start Date"
                      minDate={new Date("2012-03-01")}
                      maxDate={new Date("2023-06-01")}
                      value={value}
                      onChange={onChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          className={classes.field}
                          helperText={null}
                        />
                      )}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container rowSpacing={2} columnSpacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Skills
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Autocomplete
                  multiple
                  // value={skills}
                  onChange={(event, newValue) => {
                    setSkills(newValue);
                  }}
                  id="tags-outlined"
                  options={skillsList}
                  getOptionLabel={(option) => option}
                  defaultValue={[skillsList[0]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Skills"
                      placeholder="Skills"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.btn}
                  type="submit"
                  variant="contained"
                  size="large"
                  fullwidth
                  endIcon={<SendIcon />}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </LocalizationProvider>
    </div>
  );
};

export default Form;

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
