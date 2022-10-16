import { CredentialsContent } from "./style";

// Credentials components
import { CredentialsCard } from "./components";

// configs
import { companyData } from "../../../../configs";

export const Credentials = () => {
  const { lawyers } = companyData;

  return (
    <CredentialsContent>
      <div className="centralizer">
        {lawyers.map((currentLawyer, index) => (
          <CredentialsCard lawyers={currentLawyer} key={"lawyer-" + index} />
        ))}
      </div>
    </CredentialsContent>
  );
};
