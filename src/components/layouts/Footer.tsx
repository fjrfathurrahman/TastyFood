import { BoxFlex, BoxGrid, LinksEl } from "../common";
import { MainContainer } from "../containers/MainContainer";
import { SectionLayout } from "../containers/SectionLayout";
import { ApiResponse, ResponseCompany } from "@/lib/types/types";
import { dIcons, dNavigation } from "@/lib/data/data";
import useGetData from "@/lib/hook/useGetData";

export const Footer = async (): Promise<JSX.Element> => {
  const result: ApiResponse<ResponseCompany> = await useGetData({url: 'http://localhost:8000/api/company', revalidate: 7200});

  if (!result.data) {
    return <div>Sepertinya ada kesalahan pada server</div>;
  }

  return (
    <SectionLayout bg="bg-black">
      <MainContainer className="text-white">
        <BoxFlex
          className="lg:flex-row"
          justify="justify-between"
          direction="flex-col"
          gap="gap-12"
        >
          <StartFooter data={result.data} />
          <BodyFooter data={result.data} />
        </BoxFlex>

        <EndFooter data={result.data} />
      </MainContainer>
    </SectionLayout>
  );
};

const StartFooter = (props: { data: ResponseCompany[] }) => {
  const result = props.data[0];

  return (
    <div className="w-full lg:w-2/4 font-medium">
      <h1 className="mb-4 text-4xl font-bold">{result.company_name}</h1>
      <p>{result.description}</p>
      <BoxFlex className="mt-8">
        <LinksEl variant="Icon" url={result.twitter} icon={dIcons.twitter} />
        <LinksEl variant="Icon" url={result.linkedin} icon={dIcons.linkedin} />
        <LinksEl variant="Icon" url={result.facebook} icon={dIcons.facebook} />
        <LinksEl variant="Icon" url={result.twitter} icon={dIcons.instagram} />
      </BoxFlex>
    </div>
  );
};

const BodyFooter = (props: { data: ResponseCompany[] }) => {
  const result = props.data[0];

  return (
    <BoxGrid className="w-full sm:grid-cols-2 lg:grid-cols-3">
      <BoxFlex direction="flex-col">
        <span className="font-bold text-xl">Useful Links</span>
        {dNavigation.menu.map((item) => (
          <LinksEl key={item.name} text={item.name} url={item.url} />
        ))}
      </BoxFlex>
      <BoxFlex direction="flex-col">
        <span className="font-bold text-xl">Privacy</span>
        {dNavigation.privacy.map((item) => (
          <LinksEl key={item.name} text={item.name} />
        ))}
      </BoxFlex>
      <BoxFlex direction="flex-col">
        <span className="font-bold text-xl">Contact Info</span>
        <LinksEl
          variant="withIcon"
          text={`${result.email}@gmail.com`}
          icon={dIcons.email}
          url={`mailto:${result.email}`}
        />
        <LinksEl
          variant="withIcon"
          text={`+${result.phone}`}
          icon={dIcons.phone}
        />
        <LinksEl
          variant="withIcon"
          text={result.address}
          icon={dIcons.location}
          url={dIcons.location}
        />
      </BoxFlex>
    </BoxGrid>
  );
};

const EndFooter = (props: { data: ResponseCompany[] }) => {
  const result = props.data[0];

  return (
    <div className="mt-16 pt-8 text-center font-medium border-t">
      <p>
        Copyright © {new Date().getFullYear()} {result.company_name}. All rights
        reserved.
      </p>
    </div>
  );
};
