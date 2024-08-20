'use client';

import { useState } from 'react';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getRestaurantInfo } from '@/services/restaurantService';
import { RestaurantType } from '@/types/coreTypes';
import { useOrderStore } from '@/state/orderStore';
import SettingImage from '@/components/meetings/settingImage';
import SettingLabel from '@/components/meetings/settingLabel';
import SettingAddress from '@/components/meetings/settingAddress';
import TimeInput from '@/components/common/timeInput';
import { CustomDropdown } from '@/components/common/dropdown';
import InfoBox from '@/components/common/infoBox';
import ErrorMessage from '@/components/meetings/errorMessage';

const Step1 = () => {
  const { formData, setMealType, setOrderType, setMeetingPlace, setTime } =
    useOrderStore();

  const { mealType, orderType, meetingPlace, time } = formData;
  const [error, setError] = useState<string | null>(null);

  const options1 = [
    { id: 1, name: '함께 식사', value: 'option1' },
    { id: 2, name: '각자 식사', value: 'option2' },
  ];

  const options2 = [
    { id: 1, name: '바로 주문', value: 'optionA' },
    { id: 2, name: '예약 주문', value: 'optionB' },
  ];

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const handleToggleDropdown1 = () => {
    setIsDropdownOpen1((prev) => !prev);
  };

  const handleToggleDropdown2 = () => {
    setIsDropdownOpen2((prev) => !prev);
  };

  const { storeId } = useParams();

  const { data: store } = useQuery<RestaurantType>({
    queryKey: ['storeInfo', storeId],
    queryFn: () => getRestaurantInfo(Number(storeId)),
    enabled: !!storeId,
  });

  const validateTime = (formattedTime: string) => {
    if (store && store.openTime && store.closeTime) {
      const [selectedHour, selectedMinute] = formattedTime
        .split(':')
        .map(Number);
      const [openHour, openMinute] = store.openTime.split(':').map(Number);
      const [closeHour, closeMinute] = store.closeTime.split(':').map(Number);

      const selectedTimeInMinutes = selectedHour * 60 + selectedMinute;
      const openTimeInMinutes = openHour * 60 + openMinute;
      const closeTimeInMinutes = closeHour * 60 + closeMinute;

      if (
        selectedTimeInMinutes < openTimeInMinutes ||
        selectedTimeInMinutes > closeTimeInMinutes
      ) {
        setError(
          `영업 시간은 ${store.openTime}부터 ${store.closeTime}까지입니다.\n이 시간 내로 선택해주세요.`,
        );
      } else {
        setError(null);
      }
    }
  };

  const handleTimeChange = (
    newTime: Partial<{ amPm: string; hour: string; minute: string }>,
  ) => {
    const updatedTime = {
      ...time,
      ...newTime,
    };

    let { hour } = updatedTime;
    const { minute } = updatedTime;

    if (updatedTime.amPm === '오후' && hour !== '12') {
      hour = (parseInt(hour, 10) + 12).toString().padStart(2, '0');
    }

    const formattedTime = `${hour}:${minute}`;
    setTime(updatedTime);
    validateTime(formattedTime);
  };

  return (
    <>
      <SettingImage />
      <SettingLabel text="팀 주문 방식" />
      <CustomDropdown
        options={options1}
        selectedValue={mealType}
        onSelect={setMealType}
        isOpen={isDropdownOpen1}
        onToggle={handleToggleDropdown1}
        placeholder=""
      />
      <InfoBox
        textItems={[
          {
            text: '함께 식사:',
            $textStyle: 'Title',
            sameRow: true,
            id: 1,
          },
          {
            text: '다 같이 한 장소에서 수령하여 함께 식사해요.',
            $textStyle: 'Description',
            id: 2,
          },
          {
            text: '각자 식사:',
            $textStyle: 'Title',
            sameRow: true,
            id: 3,
          },
          {
            text: '각자 설정한 주소로 수령하여 편하게 식사해요.',
            $textStyle: 'Description',
            id: 4,
          },
        ]}
        showIcon={false}
      />
      <CustomDropdown
        options={options2}
        selectedValue={orderType}
        onSelect={setOrderType}
        isOpen={isDropdownOpen2}
        onToggle={handleToggleDropdown2}
        placeholder=""
      />
      <InfoBox
        textItems={[
          {
            text: '바로 주문:',
            $textStyle: 'Title',
            sameRow: true,
            id: 5,
          },
          {
            text: '최대 모집 인원이 모일 시 바로 주문합니다.',
            $textStyle: 'Description',
            id: 6,
          },
          {
            text: '예약 주문:',
            $textStyle: 'Title',
            sameRow: true,
            id: 7,
          },
          {
            text: '주문 대기 시간에 맞춰 주문합니다.',
            $textStyle: 'Description',
            id: 8,
          },
        ]}
        showIcon={false}
      />
      <SettingLabel text="수령 장소" />
      <SettingAddress />
      <SettingLabel text="모임 장소" />
      <input
        type="text"
        placeholder="모임 장소"
        value={meetingPlace}
        onChange={(e) => setMeetingPlace(e.target.value)}
      />
      <SettingLabel text="주문 대기 최대 기한" />
      <TimeInput onTimeChange={handleTimeChange} time={time} />
      {error && <ErrorMessage message={error} />}
    </>
  );
};

export default Step1;