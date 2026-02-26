import { vi } from 'vitest';

vi.mock('react-router', () => ({
  useNavigate: vi.fn(),
  useParams: vi.fn(() => ({
    customerId: 'test-customer-id',
  })),
  useLocation: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  Link: vi.fn(() => 'mock link'),
}));

vi.mock('react-redux', () => ({
  useSelector: vi.fn(() => ({})),
  useDispatch: vi.fn(() => vi.fn()),
}));

vi.mock('@/theme/mixins.ts', () => ({
  getButtonStyle: vi.fn(() => vi.fn()),
  activeButtonStyle: vi.fn(),
  borderDefaultStyleMixin: vi.fn(),
  borderHighlightColorMixin: vi.fn(),
  checkedRadioStyle: vi.fn(),
  defaultLinkStyle: vi.fn(),
  defaultButtonStyle: vi.fn(),
  defaultDatePickerStyle: vi.fn(),
  defaultDividerStyle: vi.fn(),
  defaultInputStyle: vi.fn(),
  defaultSelectStyle: vi.fn(),
  errorButtonStyle: vi.fn(),
  getAmberPillStyle: vi.fn(),
  getBluePillStyle: vi.fn(),
  getGrayPillStyle: vi.fn(),
  getGreenPillStyle: vi.fn(),
  getRedPillStyle: vi.fn(),
  HighlightButtonStyle: vi.fn(),
  LinkButtonStyle: vi.fn(),
  primaryButtonStyle: vi.fn(),
  sectionBackgroundColor: vi.fn(),
  textDefaultColorMixin: vi.fn(),
  textErrorColorMixin: vi.fn(),
  textHighLighColorSecondaryMixin: vi.fn(),
  textHighlightColorMixin: vi.fn(),
  textLinkColorMixin: vi.fn(),
}));

vi.mock('@/hooks/UseNotificationHook', () => ({
  useNotificationHook: () => vi.fn(),
}));
