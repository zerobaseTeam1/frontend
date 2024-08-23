// 'use client';

// import styled from 'styled-components';
// import { Divider, Badge, Button } from '@chakra-ui/react';
// import Counter from '@/components/common/counter';
// import { formatCurrency } from '@/utils/currencyFormatter';
// import { useEffect, useState } from 'react';

// interface CartItemProps {
//   menuName: string;
//   price: number;
//   imageUrl: string;
//   badgeText: string;
//   quantity: number;
//   onQuantityChange: (newValue: number) => void;
//   onAddItem: () => void;
// }

// const Container = styled.div`
//   width: 100%;
//   background-color: var(--background);
//   display: flex;
//   flex-direction: column;
//   border-radius: var(--border-radius-default);
//   padding: var(--spacing-sm);
//   gap: var(--spacing-sm);
// `;

// const MenuListWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: var(--background);
// `;

// const TextWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: var(--spacing-sm);
// `;

// const MenuName = styled.h2`
//   font-size: var(--font-size-md);
//   font-weight: var(--font-semi-bold);
//   color: var(--text);
//   margin: 0;
// `;

// const Price = styled.p`
//   font-size: var(--font-size-sm);
//   font-weight: var(--font-regular);
//   color: var(--text);
//   margin: 0;
// `;

// const ImageWrapper = styled.div`
//   width: 4rem;
//   height: 4rem;
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   border-radius: var(--border-radius-md);
//   overflow: hidden;
// `;

// const MenuImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const QuantityContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

export default function CartItem() {
  //   {
  //   menuName,
  //   price,
  //   imageUrl,
  //   badgeText,
  //   quantity,
  //   onQuantityChange,
  //   onAddItem,
  //   },
  // : CartItemProps
  //   const [totalPrice, setTotalPrice] = useState(price * quantity);
  //   useEffect(() => {
  //     setTotalPrice(price * quantity);
  //   }, [price, quantity]);
  //   return (
  //     <Container>
  //       <MenuListWrapper>
  //         <TextWrapper>
  //           <MenuName>{menuName}</MenuName>
  //           <Price>{formatCurrency(totalPrice)}</Price>
  //         </TextWrapper>
  //         <ImageWrapper>
  //           <MenuImage src={imageUrl} alt={menuName} />
  //         </ImageWrapper>
  //       </MenuListWrapper>
  //       <QuantityContainer>
  //         <Badge
  //           sx={{
  //             fontSize: 'var(--font-size-xs)',
  //             color: 'white',
  //             backgroundColor: 'var(--purple200)',
  //             padding: 'var(--spacing-xs) var(--spacing-sm)',
  //             borderRadius: 'var(--border-radius-md)',
  //           }}
  //         >
  //           {badgeText}
  //         </Badge>
  //         <Counter value={quantity} onValueChange={onQuantityChange} size="small" />
  //       </QuantityContainer>
  //       <Divider
  //         orientation="horizontal"
  //         sx={{
  //           borderWidth: '0.5px',
  //           borderColor: 'var(--gray200)',
  //         }}
  //       />
  //       <Button
  //         onClick={onAddItem}
  //         sx={{
  //           backgroundColor: 'transparent',
  //           color: 'var(--text)',
  //           height: 'auto',
  //           margin: 'none',
  //           padding:'none',
  //           fontSize: 'var(--font-size-sm)',
  //           fontWeight: 'var(--font-regular)',
  //           _hover: {
  //             backgroundColor: 'transparent',
  //           },
  //           _active: {
  //             backgroundColor: 'transparent',
  //           },
  //           _focus: {
  //             boxShadow: 'none',
  //           },
  //         }}
  //       >
  //         + 메뉴 추가
  //       </Button>
  //     </Container>
  //   );
}
