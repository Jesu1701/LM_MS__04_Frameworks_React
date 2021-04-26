import React from "react";
import { MemberSearch } from "../components/member-search/member-search";
import { ShowMemberList } from "../layout/list";
import { HeaderLayout } from "../layout/header";

//import { useDebounce } from "use-debounce";

export const ListPage: React.FC = () => {
  return (
    <>
      <HeaderLayout />
      <MemberSearch />
      <ShowMemberList />
    </>
  );
};
