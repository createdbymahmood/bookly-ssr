import NProgress, {
    NProgressOptions,
    NProgress as NProgressInstanceInterface,
} from 'nprogress';

const NprogressConfig = {
    showSpinner: true,
};

const applyNprogressConfig = (
    NProgressInstance: NProgressInstanceInterface,
    config: Partial<NProgressOptions>
) => {
    NProgressInstance.configure(config);
};

applyNprogressConfig(NProgress, NprogressConfig);

export { NProgress };
