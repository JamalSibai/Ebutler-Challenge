import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";

import { OnboardingStack } from "./OnboardingStack";
import { UserBottomTabs } from "./UserStack";

export function StackSwitcher() {
  const user = useSelector((state) => state?.user);

  return user?.userProfile ? <UserBottomTabs /> : <OnboardingStack />;
}
