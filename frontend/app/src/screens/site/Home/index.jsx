/**
 * @component Template
 * @param {*} props
 * @description
 */

/* --- Global --- */

/* --- Local --- */
import {TransactionListQuery} from '@containers';
import {FormContractRawUpload} from '@forms';

/* --- Screen : Component --- */
const Screen = props => {
  return (
    <Atom.Box sx={{height: '100%', flex: 1, width: '100%'}}>
      <Showcase />
      <Main />
    </Atom.Box>
  );
};

/* --- Showcase : Component --- */
const Showcase = props => {
  return (
    <Atom.Box gradient="orange" sx={styleShowcase}>
      <Atom.Container>
        <Atom.Flex alignCenter>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Heading
              heavy
              as="h2"
              sx={{
                fontSize: [4, 4, 5],
              }}>
              <Atom.Span thin>Infura</Atom.Span> Proxy Service
            </Atom.Heading>
            <Atom.Heading
              as="h2"
              sx={{
                fontSize: [1, 1, 2],
              }}>
              Manage application costs. <br />
              <strong>Scale a decentralized application.</strong>
            </Atom.Heading>
            <Atom.Paragraph sm>
              Curabitur placerat, risus in mollis auctor, purus nibh aliquet
              erat, sed gravida augue ex sed purus. Phasellus nisi purus,
              consectetur nec auctor at, pharetra sed magna. Etiam mollis
              dapibus erat in dignissim.
            </Atom.Paragraph>
            <Atom.Flex>
              <Molecule.Link to="/insights" m1>
                <Atom.Button orange>Dashboard</Atom.Button>
              </Molecule.Link>
            </Atom.Flex>
          </Atom.Box>
          <Atom.Flex center column sx={{flex: 2, p: 4}}>
            {/* Start : Card */}
            <Atom.Box
              card
              sx={{
                px: 4,
                py: 4,
                textAlign: 'center',
                width: ['100%', '100%', '80%'],
              }}>
              <Atom.Heading strong>
                <Atom.Span normal sm>
                  Optimize Application's Infrastructure
                </Atom.Span>
                <br />
                <Atom.Span sx={{fontSize: [3, 3, 4]}}>
                  Setup Ethereum Caching API
                </Atom.Span>
              </Atom.Heading>
              <Atom.HorizontalRule sx={{my: 2}} />
              <FormContractRawUpload />
              <Atom.HorizontalRule sx={{my: 3}} />
              <Atom.Heading as="h5" sm>
                Setup a smart contract caching endpoint using the
                infura-proxy-service.
              </Atom.Heading>
            </Atom.Box>
            {/* End : Card */}
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const styleShowcase = {
  // bg: 'blue',
  color: 'white',
  py: [4, 4, 5],
  width: '100%',
};

const Main = props => {
  return (
    <Atom.Box sx={{bg: 'smoke'}}>
      <Atom.Container>
        <TransactionListQuery />
      </Atom.Container>
    </Atom.Box>
  );
};

export default Screen;
