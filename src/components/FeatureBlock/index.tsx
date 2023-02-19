import React from 'react';
import FeatureBlockBody from './FeatureBlockBody';
import FeatureBlockFooter from './FeatureBlockFooter';
import FeatureBlockSubSection from './FeatureBlockSubSection';

function FeatureBlock({ children }): JSX.Element {
  return (
    <figure className="border-2 rounded">
      {children}
    </figure>
  );
}

export default Object.assign(FeatureBlock, {
  Body: FeatureBlockBody,
  Footer: FeatureBlockFooter,
  Subsection: FeatureBlockSubSection,
});
