"use client";

import { FC, useLayoutEffect, useState } from "react";
import styles from "./styles.module.scss";
import cs from "classnames";
import { UserIcon } from "@/Assets/icons/UserIcon";
import { Container } from "../Container";
import { BagIcon } from "@/Assets/icons/BagIcon";
import { HeartIcon } from "@/Assets/icons/HeartIcon";
import { Navigation } from "../Navigation";
import { SearchIcon } from "@/Assets/icons/SearchIcon";
import { Search } from "../Search";

export const Header: FC = () => {
  const [showSearch, setShowSerch] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);

  const handleToggleAnimation = () => {
    setShowSerch(!showSearch);
  };

  const handleScroll = () => {
    setSticky(window.scrollY > 100);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={cs(styles.Header, {
        [styles.Sticky]: sticky,
      })}
    >
      <Container className={styles.HeaderContainer}>
        <h1>GIOI</h1>
        <Navigation />

        <div className={styles.UserActions}>
          <div
            className={cs(styles.SerachFiled, {
              [styles.ToggleAnim]: showSearch,
            })}
          >
            <Search />
          </div>

          <SearchIcon
            className={styles.SearchIcon}
            onClick={handleToggleAnimation}
          />
          <BagIcon />
          <HeartIcon />
          <UserIcon />
        </div>
      </Container>
    </header>
  );
};
