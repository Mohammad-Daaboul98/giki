import { Box, Container, Image, SimpleGrid } from '@chakra-ui/react';
import { enableState, userInfo } from '../state/recoil_state';
import { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

export default function Category() {
  const [user, setUser] = useRecoilState(userInfo);
  const [checkedItems, setCheckedItems] = useState<string[]>(user.interest);
  const setEnable = useSetRecoilState(enableState);



  useEffect(() => {
    if (checkedItems.length >= 3) {
      setEnable(false)
    }
  }, [checkedItems])

  const handleCheckboxChange = async (item: string) => {
    if (checkedItems.includes(item)) {
      const updatedItems = checkedItems.filter((i) => i !== item);
      setCheckedItems(updatedItems);
      setUser({ ...user, interest: updatedItems });
    } else {
      setCheckedItems([...checkedItems, item]);
      setUser({ ...user, interest: [...checkedItems, item] });
    }

    
  };

  const title = ['Innovation', 'Medicine', 'Education', 'Pharmtech', 'Research', 'Technology', 'Telemedicine', 'Lorem Ipsum'];

  return (
    <section  id="category" className="text-center h-[100%] mb-5">
      <Container maxW="sm">
        <h1 className="text-[28px] text-[#434E61] font-bold">Tell us what you’re interested in</h1>
      </Container>
      <SimpleGrid className="mt-5" columns={[2, 3, 4]}  spacing={5}>
        {title.map((item, index) => (
          <Box key={index} className="relative" width="138px">
            <input
              type="checkbox"
              id={String(index)}
              value={item}
              className="peer hidden"
              checked={checkedItems.includes(item)}
              onChange={() => handleCheckboxChange(item)}
            />
            {checkedItems.includes(item) ? (
              <Image src="src/assets/check.svg" className="absolute right-5 top-3" alt="checkbox" />
            ) : null}
            <label
              htmlFor={String(index)}
              className="inline-flex items-center justify-between rounded-[10px] cursor-pointer border-2 border-transparent peer-hover:border-[#FF8C1E] peer-hover:border-2  peer-checked:border-[#FF8C1E] peer-checked:border-2"
            >
              <Image className="rounded-[10px]" boxSize="125px" src={`src/assets/category-${index + 1}.png`} alt="category" />
              <p className="absolute top-[70%] left-[10%] text-white">{item}</p>
            </label>
          </Box>
        ))}
      </SimpleGrid>
    </section>
  );
}
