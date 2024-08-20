'use client';

import Header from '@/components/layout/header';
import styled from 'styled-components';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { getMyData, getMyEvaluates } from '@/services/myDataService';
import { BaseBtnInactive } from '@/styles/button';
import { useRouter } from 'next/navigation';
import Container from '@/styles/container';
import GroupIcon from '@/components/svg/group';
import { Divider } from '@chakra-ui/react';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  background: var(--primary);
  position: relative;
`;

const Flexbox = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  gap: 1rem;
  font-size: var(--font-size-sm);

  p {
    font-weight: var(--font-semi-bold);
    min-width: 75px;
  }
`;

const Nickname = styled.h1`
  font-weight: var(--font-semi-bold);
  font-size: var(--font-size-lg);
`;

const EvaluateContainer = styled.section.attrs({ className: 'icon' })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-lg);

  h3 {
    font-weight: var(--font-semi-bold);
  }

  button {
    padding: 1rem;
    margin: -1rem;
  }
`;

const ListContainer = styled.ul`
  margin: 1rem;
  overflow: hidden;
`;

const ListItem = styled.li`
  display: flex;
  padding: 1rem;
  align-items: start;
  gap: 0.3rem;

  div {
    background: var(--gray100);
    padding: 1rem;
    margin-left: 0.7rem;
    border-radius: 0 var(--border-radius-md) var(--border-radius-md)
      var(--border-radius-md);
  }
`;

const MyPage = () => {
  const router = useRouter();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['MyData'],
    queryFn: getMyData,
  });

  const {
    data: evaluates,
    isLoading: evaluatesLoading,
    isError: evaluatesError,
  } = useQuery({
    queryKey: ['MyEvaluates'],
    queryFn: getMyEvaluates,
  });

  return (
    <>
      <Header buttonLeft="back" text="프로필" />
      <Container>
        <Flexbox>
          <ImageWrapper>
            {data && (
              <Image
                src={data.image}
                alt="My Profile Image"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            )}
          </ImageWrapper>
          <Nickname>
            {isError
              ? '닉네임 없음'
              : isLoading
                ? '불러오는 중'
                : data && data.nickname}
          </Nickname>
        </Flexbox>
        <Flexbox>
          <GroupIcon color="var(--purple200)" />
          <p>완료 모임 수</p>
          <span>{data ? data.meetingCount : 0}</span>
        </Flexbox>
        <Flexbox>
          <Image
            src="./department.svg"
            alt="map pin icon"
            width="18"
            height="18"
            priority
          />
          <p>소속 학과</p>
          <span>
            {isError
              ? '학부 데이터 없음'
              : isLoading
                ? '불러오는 중'
                : data && data.major}
          </span>
        </Flexbox>
        <Flexbox>
          <BaseBtnInactive
            onClick={() => router.push(`/${data?.nickname.trim()}`)}
          >
            프로필수정
          </BaseBtnInactive>
        </Flexbox>

        <Divider />

        <ListContainer>
          <EvaluateContainer>
            <h3>평가 배지</h3>
            <button onClick={() => router.push('/myPage/evaluate')}>
              {'>'}
            </button>
          </EvaluateContainer>
          <ListItem>
            <GroupIcon color="var(--gray400)" />
            <p>3</p>
            <div>소통이 잘 돼요</div>
          </ListItem>
        </ListContainer>
      </Container>
    </>
  );
};

export default MyPage;
