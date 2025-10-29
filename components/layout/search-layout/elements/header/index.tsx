"use client";
import useScrollController from "@/core/hooks/useScrollController";
import useSearchStore from "@/core/stores/search-store";
import { Maximize2, Minimize2, Search } from "lucide-react";
import React from "react";
import ButtonItem from "./buttons/item";
import SearchSystem from "@/components/common/header/fragments/common/search-system";

const Header = () => {
  const { isFullScreen, setIsFullScreen } = useSearchStore();
  const { isScrolled } = useScrollController();

  return (
    <div className="bg-white h-[142px] pt-[22px] ">
      <div className="flex container h-full justify-between">
        <div className="container h-full flex flex-col justify-between">
          <div className="flex-between">
            <p className="text-[32px] max-w-max font-bold text-[#444859]">
              جستجو
            </p>
            <div className=" text-neutral-400">
              {!isFullScreen ? (
                <button
                  className="cursor-pointer max-w-max"
                  onClick={() => setIsFullScreen(true)}
                >
                  <Maximize2 />
                </button>
              ) : (
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    if (isScrolled) {
                      window.scrollTo({ top: 0 });
                    }
                    setIsFullScreen(false);
                  }}
                >
                  <Minimize2 />
                </button>
              )}
            </div>
          </div>
          <div className="flex gap-4">
            <ButtonItem
              label={"لورم ایپسوم"}
              onClick={() => {}}
              Icon={<Search className="size-5" />}
            />
            <ButtonItem
              label={"لورم ایپسوم"}
              onClick={() => {}}
              Icon={<Search className="size-5" />}
            />
            <ButtonItem
              label={"لورم ایپسوم"}
              onClick={() => {}}
              Icon={<Search className="size-5" />}
            />
            <ButtonItem
              label={"لورم ایپسوم"}
              onClick={() => {}}
              Icon={<Search className="size-5" />}
            />
            <ButtonItem
              label={"لورم ایپسوم"}
              onClick={() => {}}
              Icon={<Search className="size-5" />}
            />
            <ButtonItem
              label={"لورم ایپسوم"}
              onClick={() => {}}
              Icon={<Search className="size-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
