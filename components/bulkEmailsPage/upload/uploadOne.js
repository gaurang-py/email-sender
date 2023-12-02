import { fileScannerEmail } from "@/lib/fileScanner";
import { isEmail } from "@/lib/validation";

export default function UploadOne({ setContactsList }) {
  const fileScannerEmail = (file) => {
    console.log(file.name);
    var fileExt = file.name.split(".").pop().toLowerCase();
    if (fileExt !== "txt") {
      alert("Please upload a txt file");
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const fileContent = reader.result.trim().split(/\r?\n?\s/);
      console.log(fileContent);

      let contactList = [];
      for (let i = 0; i < fileContent.length; i++) {
        if (isEmail(fileContent[i])) {
          contactList.push(fileContent[i]);
        }
      }

      setContactsList(contactList);
    };
  };

  return (
    <div>
      <div>Retrieve contact emails</div>

      <div>
        <input
          type="file"
          className="file-input file-input-bordered file-input-info w-full"
          onChange={(event) => fileScannerEmail(event.target.files[0])}
        />
      </div>
    </div>
  );
}
