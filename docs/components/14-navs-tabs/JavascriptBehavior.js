import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
          </li>
          <li className="nav-item dropdown">
            <button type="button" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown <i className="fas fa-caret-down ml-2"></i>
            </button>
            <div className="dropdown-menu">
              <a href="#contact" className="dropdown-item" data-bs-toggle="tab" role="tab" aria-controls="contact" aria-selected="false">
                Contact
              </a>
              <hr className="my-2" />
              <a href="#dropdown2" className="dropdown-item" data-bs-toggle="tab" role="tab" aria-controls="dropdown2" aria-selected="false">
                Dropdown 2
              </a>
            </div>
          </li>
        </ul>

        <div className="tab-content">
          <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
            Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim
            occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute
            sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse
            consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod
            tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa
            non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis
            occaecat ex.
          </div>
          <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit.
            Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation
            velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat
            voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum
            pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo
            nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
          </div>
          <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat
            sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim
            cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet
            eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip
            ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum
            laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore
            eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla
            anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
          </div>
          <div className="tab-pane fade" id="dropdown2" role="tabpanel" aria-labelledby="tab4-tab">
            Dropdown 2 Content
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
