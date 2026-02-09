'use client';
import { TimesIcon } from '@primereact/icons/times';
import { Dialog } from '@primereact/ui/dialog';
import { Tag } from '@primereact/ui/tag';

export default function LongContentDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root modal>
                <Dialog.Trigger>Terms of Service</Dialog.Trigger>
                <Dialog.Backdrop />
                <Dialog.Portal style={{ width: '40rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Terms of Service</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close>
                                <TimesIcon />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <Tag severity="info">Updated</Tag>
                                <span className="text-sm text-surface-500 dark:text-surface-400">Last revised: January 1, 2026</span>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">1. Acceptance of Terms</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    By accessing and using this service, you accept and agree to be bound by the terms and provision of this
                                    agreement. If you do not agree to abide by the above, please do not use this service.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">2. Use License</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    Permission is granted to temporarily download one copy of the materials on this service for personal,
                                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this
                                    license you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to
                                    decompile or reverse engineer any software contained on this service.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">3. Disclaimer</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    The materials on this service are provided on an &apos;as is&apos; basis. We make no warranties, expressed or
                                    implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or
                                    conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or
                                    other violation of rights.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">4. Limitations</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss
                                    of data or profit, or due to business interruption) arising out of the use or inability to use the materials on
                                    this service, even if we or an authorized representative has been notified orally or in writing of the possibility
                                    of such damage.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">5. Privacy Policy</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal
                                    information when you use our service. By using our service, you agree to the collection and use of information in
                                    accordance with our Privacy Policy. We are committed to ensuring that your information is secure and handled
                                    responsibly.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">6. User Accounts</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    When you create an account with us, you must provide information that is accurate, complete, and current at all
                                    times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your
                                    account on our service. You are responsible for safeguarding the password that you use to access the service and
                                    for any activities or actions under your password.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">7. Intellectual Property</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    The service and its original content, features, and functionality are and will remain the exclusive property of
                                    the company and its licensors. The service is protected by copyright, trademark, and other laws of both domestic
                                    and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service
                                    without the prior written consent of the company.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">8. Termination</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason
                                    whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service
                                    will immediately cease. If you wish to terminate your account, you may simply discontinue using the service or
                                    contact us to request account deletion.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">9. Indemnification</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    You agree to defend, indemnify, and hold harmless the company and its licensee and licensors, and their employees,
                                    contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses,
                                    liabilities, costs or debt, and expenses, including but not limited to attorney&apos;s fees, resulting from or
                                    arising out of your use and access of the service, or a breach of these Terms.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">10. Governing Law</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    These terms and conditions are governed by and construed in accordance with applicable laws and you irrevocably
                                    submit to the exclusive jurisdiction of the courts in that location. Any claim relating to this service shall be
                                    governed by the laws without regard to its conflict of law provisions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mt-0 mb-2">11. Changes to Terms</h3>
                                <p className="text-sm leading-relaxed mt-0 mb-0 text-surface-600 dark:text-surface-300">
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
                                    material we will try to provide at least 30 days&apos; notice prior to any new terms taking effect. What
                                    constitutes a material change will be determined at our sole discretion. By continuing to access or use our
                                    service after those revisions become effective, you agree to be bound by the revised terms.
                                </p>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
