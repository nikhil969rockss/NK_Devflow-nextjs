import { HOT_QUESTIONS, POPULAR_TAGS } from '@/constants';
import { ROUTES } from '@/constants/route';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TagCard from './cards/TagCard';

const RightSideBar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      {/* -----TOP Questions------- */}
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Queations</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {HOT_QUESTIONS.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.QUESTIONS(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src={'/icons/chevron-right.svg'}
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* -----POPULAR TAGS------- */}
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {POPULAR_TAGS.map((question) => (
            <TagCard key={question._id} {...question} showCount compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
