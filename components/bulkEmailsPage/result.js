
import Alert from "@mui/material/Alert";

export default function Result({ emails }) {
  return (
    <>
      {emails.length == 0 ? (
        <Alert security="success">Successfully Sent All Emails</Alert>
      ) : (
        <Alert severity="error" variant="filled">
          Error in sending Emails. Your App Password is incorrect
        </Alert>
      )}
    </>
  );
}
