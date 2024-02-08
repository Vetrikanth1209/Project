export default function ComboBox() {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Subject}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Sub Type" />}
      />
    );
  }

  const Subject = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 }]