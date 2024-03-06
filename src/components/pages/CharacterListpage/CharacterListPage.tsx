import { Suspense } from "react";
import { Await, useLoaderData, useNavigate, useSubmit } from "react-router-dom";

import { useFilter } from "../../../hooks/useFilter";
import CharacterList from "../../CharacterList/CharacterList";
import SearchInput from "../../SearchInput/SearchInput";
import SkeletonCards from "../../SkeletonCards/SkeletonCards";

import type { Character } from "../../../domain/models/Character";

const CharacterListPage = () => {
	const navigate = useNavigate();
	const submit = useSubmit();

	const { data, search } = useLoaderData() as {
		data: Character[];
		search: string;
	};

	function handleSearch(value: string) {
		const isFirstSearch = value === null;
		if (!!filter.ref && !!filter.ref.current) {
			submit(filter.ref.current?.form, {
				replace: !isFirstSearch,
			});
		}
	}

	const filter = useFilter({
		initialValue: search,
		onChange: handleSearch,
	});

	return (
		<>
			<main>
				<SearchInput
					inputRef={filter.ref}
					initialValue={filter.input}
					handleSearch={filter.handleChange}
				/>

				<Suspense fallback={<SkeletonCards />}>
					<Await resolve={data}>
						{(characters: Character[]) => {
							return (
								<>
									<CharacterList
										characters={characters}
										navigate={navigate}
									/>
								</>
							);
						}}
					</Await>
				</Suspense>
			</main>
		</>
	);
};

export default CharacterListPage;
