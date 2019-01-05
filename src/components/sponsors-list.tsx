import * as React from "react";
import styled from "styled-components";
import { Section } from "./section";

interface ISponsorCollection {
  src: string;
  alt: string;
}

export const SPONSOR_COLLECTION: ISponsorCollection[] = [
  {
    src: "/images/sponsors/sbux-logo.svg",
    alt: "Starbucks Logo"
  },
  {
    src: "/images/sponsors/egghead-logo.png",
    alt: "Egghead.io Logo"
  },
  {
    src: "/images/sponsors/microsoft-logo.svg",
    alt: "Microsoft Logo"
  },
  {
    src: "/images/sponsors/color_foundry-logo.png",
    alt: "Foundry Interactive Logo"
  },
  {
    src: "/images/sponsors/deque-logo.svg",
    alt: "Deque Logo"
  }
];

const SponsorList = styled.ul`
  list-style: none inside;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;
const SponsorItem = styled.li`
  margin-bottom: 16px;
  max-width: 200px;
  width: 100%;
  display: inline-block;

  img {
    display: block;
    margin: 0 auto;
    max-width: 80%;
    max-height: 90px;
    width: auto;
  }
`;

export const SponsorMap: React.SFC<{ sponsors: ISponsorCollection[] }> = props => {
  return (
    <Section title="Sponsors">
      <SponsorList>
        {props.sponsors.map((sponsor: ISponsorCollection, index: number) => {
          return (
            <SponsorItem key={index}>
              <img {...sponsor} />
            </SponsorItem>
          );
        })}
      </SponsorList>
    </Section>
  );
};