import LinearWithValueLabel from "@/lib/linear-progress";

export default function Feedback({ contactsList, counter }) {
  return (
    <>
      <div className="text-blue-800 border-t pt-10">
        Delivered to {counter} contacts
        <LinearWithValueLabel progress={counter} totalNo={contactsList.length} />
      </div>
    </>
  );
}
