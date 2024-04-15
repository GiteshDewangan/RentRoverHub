import React from "react";

import { Input } from "components";

export default {
  title: "relasto___buyrentsell_property/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
