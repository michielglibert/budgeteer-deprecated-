import { Card, ScreenLayout } from "@/design";
import TextSection from "@/design/components/text/TextSection";
import { Box } from "native-base";
import React from "react";

export const SettingsFaqScreen: React.FC = () => {
  return (
    <ScreenLayout title="FAQ">
      <Card space="3">
        <TextSection
          title="Who made this?"
          description={`Made by Michiel Glibert.`}
        />
        <TextSection
          title="Where is my data stored?"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque vel tellus vitae lacinia. Pellentesque facilisis viverra enim, quis tempor tellus euismod in. Etiam quis risus ac metus posuere lobortis sit amet non tellus. Donec ut enim non est eleifend efficitur. Phasellus elementum dui ut dapibus viverra.`}
        />
        <TextSection
          title="What data is used?"
          description={`Nulla lectus dolor, fringilla vitae est vel, tempus lacinia urna. Fusce at sodales nisi. Nulla volutpat lacus eu faucibus convallis. Nam vitae porta diam, non venenatis eros. Fusce viverra eros sit amet purus maximus, ac tincidunt libero mollis. Vivamus dignissim erat nulla, id elementum nibh molestie a. Nulla sodales pellentesque pharetra.`}
        />
        <TextSection
          title="Is this safe?"
          description={`Vivamus viverra efficitur suscipit. Integer ullamcorper vulputate lacus vel pellentesque.`}
        />
        <TextSection
          title="Where is my data stored?"
          description={`Sed ligula mi, malesuada eget tortor a, consectetur molestie sem. In faucibus, enim a consequat malesuada, massa tortor posuere orci, sit amet dapibus sem justo pellentesque metus.`}
        />
      </Card>
    </ScreenLayout>
  );
};
