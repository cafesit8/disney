"use client"
import { ChangeEvent, FormEvent } from 'react'
import { Input, Button } from "@material-tailwind/react";

interface SearchProps {
    text: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    searchMovies: () => void;
}
 
export default function Search({ text, onChange, searchMovies }: SearchProps) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()
  return (
    <div className="sm:ml-5">
      <form onSubmit={handleSubmit} className='relative flex w-full max-w-[30rem]'>
        <Input
          color='white'
          type="text"
          label="Search Movie"
          value={text}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          type='submit'
          size="sm"
          color={text ? "blue" : "blue-gray"}
          className="!absolute right-1 top-1 rounded"
          onClick={searchMovies}
        >
          Search
        </Button>
      </form>
    </div>
  );
}